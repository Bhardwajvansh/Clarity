import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('health');

  const COLORS = [
    '#8A4FFF',
    '#6A5ACD',
    '#9370DB',
    '#BA55D3',
    '#DA70D6'
  ];

  const CATEGORIES = [
    'business',
    'technology',
    'health',
    'science',
    'entertainment'
  ];

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_79276cd316065a5ef1e99418db1cbc97e5159&category=${category}`);
      const data = await response.json();
      if (data.status === 'success') {
        setArticles(data.results || []);
      } else {
        setError('Failed to fetch news');
      }
    } catch (err) {
      setError('Error fetching news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const highlightsText = articles
      .slice(0, 5)
      .map(article => `${article.title}\n${article.description || 'No description available'}\nSource: ${article.source_name}\n\n`)
      .join('');

    const blob = new Blob([highlightsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${category}-highlights.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10 min-h-screen p-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800">Headlines</h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
          >
            <Download size={20} />
            <span>Download Highlights</span>
          </button>
        </div>

        <div className="flex gap-4 mb-6 pb-2">
          {CATEGORIES.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="px-4 py-2 rounded-md text-white min-w-max transition-transform hover:scale-105"
              style={{
                backgroundColor: COLORS[index % COLORS.length],
                border: cat === category ? '2px solid white' : 'none',
                boxShadow: cat === category ? '0 0 0 2px ' + COLORS[index % COLORS.length] : 'none'
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                {article.image_url ? (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/320";
                      e.target.alt = "Image not available";
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span
                      className="text-xs font-medium px-2 py-1 rounded text-white"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    >
                      {article.source_name}
                    </span>
                    {article.pubDate && (
                      <span className="text-xs text-gray-500 ml-2">
                        {formatDate(article.pubDate)}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description || 'No description available'}</p>
                  {article.creator && <p className="text-sm text-gray-500 mb-2">By {Array.isArray(article.creator) ? article.creator.join(', ') : article.creator}</p>}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}