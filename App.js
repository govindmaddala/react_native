// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// // Mock Data for Completed Workouts
// const initialWorkoutData = {
//   Monday: ['Chest', 'Triceps'],
//   Tuesday: ['Back'],
//   Wednesday: [],
//   Thursday: ['Shoulders'],
//   Friday: ['Legs'],
//   Saturday: ['Calves'],
//   Sunday: [], // Rest day
// };

// const initialStreak = 3; // Example streak count

// // Home Page Component
// const HomePage = ({ navigation }) => {
//   const [streak, setStreak] = useState(initialStreak);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Workout Tracker</Text>
//       <Text style={styles.subtitle}>🔥 Current Streak: {streak} Days</Text>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => navigation.navigate('Tracker')}
//       >
//         <Text style={styles.text}>Track Workouts</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => navigation.navigate('WeekDays')}
//       >
//         <Text style={styles.text}>Plan Your Workout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Tracker Component
// const TrackerScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Track Your Workouts</Text>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => navigation.navigate('DayWiseTracker')}
//       >
//         <Text style={styles.text}>Day-Wise Tracking</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => navigation.navigate('WeekWiseTracker')}
//       >
//         <Text style={styles.text}>Week-Wise Tracking</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.item}
//         onPress={() => navigation.navigate('MonthWiseTracker')}
//       >
//         <Text style={styles.text}>Month-Wise Tracking</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Day-Wise Tracker
// const DayWiseTracker = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Day-Wise Tracking</Text>
//       <FlatList
//         data={Object.entries(initialWorkoutData)}
//         keyExtractor={(item) => item[0]}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.text}>
//               {item[0]}: {item[1].length > 0 ? item[1].join(', ') : 'No Workouts'}
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// // Week-Wise Tracker
// const WeekWiseTracker = () => {
//   const totalWorkouts = Object.values(initialWorkoutData).reduce(
//     (total, day) => total + day.length,
//     0
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Week-Wise Tracking</Text>
//       <Text style={styles.subtitle}>Total Workouts: {totalWorkouts}</Text>
//       <FlatList
//         data={Object.entries(initialWorkoutData)}
//         keyExtractor={(item) => item[0]}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.text}>
//               {item[0]}: {item[1].length} Workouts
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// // Month-Wise Tracker
// const MonthWiseTracker = () => {
//   // Simulate monthly workout data (for simplicity, reuse weekly data)
//   const totalWorkouts = Object.values(initialWorkoutData).reduce(
//     (total, day) => total + day.length,
//     0
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Month-Wise Tracking</Text>
//       <Text style={styles.subtitle}>Total Workouts This Month: {totalWorkouts * 4}</Text>
//     </View>
//   );
// };

// // App Component
// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Home');
//   const [params, setParams] = useState({});

//   const navigate = (screen, params = {}) => {
//     setCurrentScreen(screen);
//     setParams(params);
//   };

//   let ScreenComponent;
//   switch (currentScreen) {
//     case 'Home':
//       ScreenComponent = <HomePage navigation={{ navigate }} />;
//       break;
//     case 'Tracker':
//       ScreenComponent = <TrackerScreen navigation={{ navigate }} />;
//       break;
//     case 'DayWiseTracker':
//       ScreenComponent = <DayWiseTracker />;
//       break;
//     case 'WeekWiseTracker':
//       ScreenComponent = <WeekWiseTracker />;
//       break;
//     case 'MonthWiseTracker':
//       ScreenComponent = <MonthWiseTracker />;
//       break;
//     case 'WeekDays':
//       ScreenComponent = <WeekDaysScreen navigation={{ navigate }} />;
//       break;
//     default:
//       ScreenComponent = <HomePage navigation={{ navigate }} />;
//   }

//   return <View style={styles.container}>{ScreenComponent}</View>;
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   item: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default App;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Data Structure for Days, Body Parts, and Exercises
const workoutPlan = {
  Monday: ['Chest', 'Triceps'],
  Tuesday: ['Back', 'Biceps'],
  Wednesday: ['Legs', 'Abs'],
  Thursday: ['Shoulders', 'Traps'],
  Friday: ['Chest', 'Biceps'],
  Saturday: ['Legs', 'Calves'],
  Sunday: ['Rest'], // Optional rest day
};

const exercisesData = {
  Chest: ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'],
  Triceps: ['Tricep Pushdown', 'Overhead Tricep Extension', 'Close Grip Bench Press'],
  Back: ['Pull-ups', 'Barbell Rows', 'Deadlifts'],
  Biceps: ['Bicep Curls', 'Hammer Curls', 'Concentration Curls'],
  Legs: ['Squats', 'Lunges', 'Leg Press'],
  Abs: ['Crunches', 'Planks', 'Leg Raises'],
  Shoulders: ['Overhead Press', 'Lateral Raises', 'Front Raises'],
  Traps: ['Shrugs', 'Face Pulls', 'Rack Pulls'],
  Calves: ['Calf Raises', 'Seated Calf Raises'],
  Rest: ['Take a break!'], // Optional for Sunday
};

// Week Days Screen
const WeekDaysScreen = ({ navigation }) => {
  const weekDays = Object.keys(workoutPlan);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Day</Text>
      <FlatList
        data={weekDays}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('BodyParts', { day: item })}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Body Parts Screen
const BodyPartsScreen = ({ route, navigation }) => {
  const { day } = route.params;
  const bodyParts = workoutPlan[day];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{day}: Select a Body Part</Text>
      <FlatList
        data={bodyParts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Exercises', { bodyPart: item })}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Exercises Screen
const ExercisesScreen = ({ route }) => {
  const { bodyPart } = route.params;
  const exercises = exercisesData[bodyPart];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bodyPart}: Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

// App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('WeekDays');
  const [params, setParams] = useState({});

  const navigate = (screen, params = {}) => {
    setCurrentScreen(screen);
    setParams(params);
  };

  let ScreenComponent;
  switch (currentScreen) {
    case 'WeekDays':
      ScreenComponent = <WeekDaysScreen navigation={{ navigate }} />;
      break;
    case 'BodyParts':
      ScreenComponent = <BodyPartsScreen navigation={{ navigate }} route={{ params }} />;
      break;
    case 'Exercises':
      ScreenComponent = <ExercisesScreen route={{ params }} />;
      break;
    default:
      ScreenComponent = <WeekDaysScreen navigation={{ navigate }} />;
  }

  return <View style={styles.container}>{ScreenComponent}</View>;
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
