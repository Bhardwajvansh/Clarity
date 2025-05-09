import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  SortableContext,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useNavigate } from 'react-router-dom';

const initialThemes = [
  {
    title: 'Autonomous Driving',
    subtopics: [
      'Path Planning and Decision Making',
      'Object Detection and Recognition',
      'Sensor Fusion (LiDAR, Radar, Camera)',
      'Level of Automation (SAE Levels 0-5)',
      'AI Hardware and Software Architecture'
    ]
  },
  {
    title: 'Driver Assistance Systems (ADAS)',
    subtopics: [
      'Adaptive Cruise Control (ACC)',
      'Lane Keeping Assist (LKA) and Lane Departure Warning (LDW)',
      'Automatic Emergency Braking (AEB)',
      'Blind Spot Monitoring (BSM)',
      'Park Assist'
    ]
  }
];

// Sortable Subtopic Component
const SortableSubtopic = ({
  id,
  subtopic,
  themeIndex,
  subtopicIndex,
  onUpdate,
  onDelete,
  isDemo,
  showDemoPopup
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleInputChange = (e) => {
    if (isDemo) {
      showDemoPopup();
    } else {
      onUpdate(themeIndex, subtopicIndex, e.target.value);
    }
  };

  const handleDelete = () => {
    if (isDemo) {
      showDemoPopup();
    } else {
      onDelete(themeIndex, subtopicIndex);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center bg-white border border-purple-200 rounded-lg px-4 py-3 shadow-sm hover:bg-purple-50 transition ${isDragging ? 'bg-purple-100' : ''}`}
    >
      <div
        {...attributes}
        {...listeners}
        className="mr-4 cursor-move select-none"
      >
        ☰
      </div>
      <input
        type="text"
        value={subtopic}
        onChange={handleInputChange}
        className="flex-grow bg-transparent outline-none focus:ring-2 focus:ring-purple-200 px-2"
        readOnly={isDemo}
      />
      <button
        onClick={handleDelete}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        🗑️
      </button>
    </div>
  );
};

export const Course = () => {
  const [themes, setThemes] = useState(initialThemes);
  const [activeId, setActiveId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    if (isPreexistingSubtopic(event.active.id)) {
      showDemoPopup();
      return;
    }
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    if (!activeId) return;

    const { active, over } = event;

    if (active.id !== over.id) {
      // Parse the ID to extract theme and subtopic indices
      const [activeThemeIndex, activeSubtopicIndex] = active.id.split('-').map(Number);
      const [overThemeIndex, overSubtopicIndex] = over.id.split('-').map(Number);

      // Check if trying to move a preexisting subtopic
      if (isPreexistingSubtopic(active.id)) {
        showDemoPopup();
      } else {
        const newThemes = [...themes];

        // If dragging within the same theme
        if (activeThemeIndex === overThemeIndex) {
          newThemes[activeThemeIndex].subtopics = arrayMove(
            newThemes[activeThemeIndex].subtopics,
            activeSubtopicIndex,
            overSubtopicIndex
          );
        } else {
          // If dragging between themes
          const [movedSubtopic] = newThemes[activeThemeIndex].subtopics.splice(activeSubtopicIndex, 1);
          newThemes[overThemeIndex].subtopics.splice(overSubtopicIndex, 0, movedSubtopic);
        }

        setThemes(newThemes);
      }
    }

    setActiveId(null);
  };

  // Function to check if a subtopic is preexisting (part of the initial data)
  const isPreexistingSubtopic = (id) => {
    const [themeIndex, subtopicIndex] = id.split('-').map(Number);
    return (
      themeIndex < initialThemes.length &&
      subtopicIndex < initialThemes[themeIndex].subtopics.length
    );
  };

  const showDemoPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const addSubtopic = (themeIndex) => {
    const newThemes = [...themes];
    newThemes[themeIndex].subtopics.push('New Subtopic');
    setThemes(newThemes);
  };

  const updateSubtopic = (themeIndex, subtopicIndex, newValue) => {
    const newThemes = [...themes];
    newThemes[themeIndex].subtopics[subtopicIndex] = newValue;
    setThemes(newThemes);
  };

  const deleteSubtopic = (themeIndex, subtopicIndex) => {
    // Check if trying to delete a preexisting subtopic
    if (isPreexistingSubtopic(`${themeIndex}-${subtopicIndex}`)) {
      showDemoPopup();
      return;
    }

    const newThemes = [...themes];
    if (newThemes[themeIndex].subtopics.length > 1) {
      newThemes[themeIndex].subtopics.splice(subtopicIndex, 1);
      setThemes(newThemes);
    }
  };

  const handleGenerateCourse = () => {
    navigate('/generated');
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen p-10 bg-gradient-to-br from-[#8A4FFF]/10 to-[#DA70D6]/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
            AI IN AUTOMOBILES
          </h1>
          <p className="text-center text-gray-600 mb-6">
            List of topics and subtopics course will cover
          </p>

          {themes.map((theme, themeIndex) => (
            <div
              key={themeIndex}
              className="mb-6 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{theme.title}</h2>
                <button
                  className="text-white hover:bg-purple-700 p-2 rounded"
                  onClick={() => addSubtopic(themeIndex)}
                >
                  + Add Themes
                </button>
              </div>

              <SortableContext
                items={theme.subtopics.map((_, subtopicIndex) =>
                  `${themeIndex}-${subtopicIndex}`
                )}
                strategy={rectSortingStrategy}
              >
                <div className="p-4 space-y-2">
                  {theme.subtopics.map((subtopic, subtopicIndex) => (
                    <SortableSubtopic
                      key={`${themeIndex}-${subtopicIndex}`}
                      id={`${themeIndex}-${subtopicIndex}`}
                      subtopic={subtopic}
                      themeIndex={themeIndex}
                      subtopicIndex={subtopicIndex}
                      onUpdate={updateSubtopic}
                      onDelete={deleteSubtopic}
                      isDemo={isPreexistingSubtopic(`${themeIndex}-${subtopicIndex}`)}
                      showDemoPopup={showDemoPopup}
                    />
                  ))}
                </div>
              </SortableContext>
            </div>
          ))}

          <div className="flex justify-center mt-8">
            <button
              onClick={handleGenerateCourse}
              className="px-8 py-3 m-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Report
            </button>
            <button
              onClick={() => navigate('/report-builder')}
              className="px-8 py-3 m-2 text-black border rounded-lg hover:opacity-90 transition-opacity"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Demo Mode Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white border-2 border-red-500 rounded-lg p-4 shadow-lg max-w-md text-center">
            <div className="text-red-500 text-lg font-bold mb-2">Demo Mode</div>
            <p>Editing existing topics is disabled in demo mode.</p>
          </div>
        </div>
      )}

      <DragOverlay>
        {activeId ? (
          <div className="bg-white border border-purple-300 rounded-lg p-3 shadow-lg">
            {(() => {
              const [themeIndex, subtopicIndex] = activeId.split('-').map(Number);
              return themes[themeIndex].subtopics[subtopicIndex];
            })()}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};