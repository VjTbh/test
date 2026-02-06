// ==============================
// STUDENT DATASET
// ==============================

const data = {
  students: [
    {
      id: 1,
      name: "Aarav",
      age: 21,
      course: "Python",
      score: 78,
      feesPaid: 20000,
      city: "Delhi",
    },
    {
      id: 2,
      name: "Meera",
      age: 23,
      course: "JavaScript",
      score: 91,
      feesPaid: 25000,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Kabir",
      age: 20,
      course: "Python",
      score: 67,
      feesPaid: 15000,
      city: "Delhi",
    },
    {
      id: 4,
      name: "Riya",
      age: 22,
      course: "Java",
      score: 88,
      feesPaid: 24000,
      city: "Bangalore",
    },
    {
      id: 5,
      name: "Arjun",
      age: 24,
      course: "JavaScript",
      score: 55,
      feesPaid: 18000,
      city: "Pune",
    },
    {
      id: 6,
      name: "Sara",
      age: 21,
      course: "Python",
      score: 95,
      feesPaid: 26000,
      city: "Mumbai",
    },
    {
      id: 7,
      name: "Dev",
      age: 25,
      course: "Java",
      score: 72,
      feesPaid: 20000,
      city: "Delhi",
    },
    {
      id: 8,
      name: "Isha",
      age: 19,
      course: "JavaScript",
      score: 84,
      feesPaid: 23000,
      city: "Bangalore",
    },
    {
      id: 9,
      name: "Rohan",
      age: 23,
      course: "Python",
      score: 61,
      feesPaid: 17000,
      city: "Pune",
    },
    {
      id: 10,
      name: "Neha",
      age: 22,
      course: "Java",
      score: 90,
      feesPaid: 25000,
      city: "Mumbai",
    },
  ],
};

// ==============================
// TASKS
// Use: map, filter, sort, forEach, reduce
// ==============================

// 1. Use map → Create an array of only student names.
let studentName = data.students.map((stud) => {
  console.log(stud.name);
});
// 2. Use map → Add 5 bonus marks to every student score.
let studentMarks = data.students.map((stud) => {
  return {
    ...stud,
    score: stud.score + 5,
  };
});
console.log(studentMarks);

// 3. Use filter → Get students who scored above 80.
let above80 = data.students.filter((stud) => {
  return stud.score > 80;
});
console.log(above80);

// 4. Use filter → Find students from Delhi.
let delhistud = data.students.filter((stud) => {
  return stud.city === "Delhi";
});
console.log(delhistud);

// 5. Use forEach → Print:
// "Aarav scored 78"

let aarav = data.students.forEach((stud) => {
  console.log(`${stud.name} scored ${stud.score}`);
});

// 6. Use sort → Sort students by score (highest to lowest).
let highToLow = data.students.sort((a, b) => {
  return (b.score - a, score);
});
console.log(highToLow);
// 7. Use sort → Sort students by age (youngest first).
let age = data.students.sort((a, b) => {
  return a.age - b.age;
});
console.log(age);
// 8. Use reduce → Calculate total fees collected.
let totalfees = data.students.reduce((total, stud) => {
  return total + stud.feesPaid;
}, 0);
console.log(totalfees);

// 9. Use reduce → Calculate average score.

// 10. Use filter + map → Names of students who failed (score < 60).
let failed = data.students
  .filter((stud) => {
    return stud.score < 60;
  })
  .map((stud) => {
    return stud.name;
  });
console.log(failed);

// 11. Use filter + sort →
// Top scoring Python students only.
let python = data.students
  .filter((stud) => {
    return stud.course === "Python";
  })
  .sort((a, b) => {
    return b.score - a.score;
  });
console.log(python);
// 12. Use map + reduce →
// Total score of JavaScript students.
let js = data.students
  .map((stud) => {
    return stud.course === "Javscript";
  })
  .reduce((total, stud) => {
    return total + stud.score;
  }, 0);
console.log(js); // result : undefined

// 13. Use filter + map + sort →
// Names of students scoring above 70 sorted alphabetically.
let above70 = data.students
  .filter((stud) => {
    return stud.score > 70;
  })
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((stud) => {
    return stud.name;
  });
console.log(above70);
// 14. Use reduce →
// Count how many students are in each course.
// Expected format:
// { Python: ?, JavaScript: ?, Java: ? }
// 15. Use reduce →
// Find the highest scoring student object.
let highestScore = data.students.reduce((total, stud) => {
  if (stud.score > total.score) return stud;
  else {
    return total;
  }
}, 0);
log(highestScore);
// 16. Use filter + reduce →
// Total fees collected from Mumbai students only.
let mumbaiStud = data.students
  .filter((stud) => {
    return stud.city === "Mumbai";
  })
  .reduce((total, stud) => {
    return total + stud.feesPaid;
  }, 0);
console.log(mumbaiStud);

// 17. Use map + reduce →
// Convert scores into grades:
// A (90+), B (70-89), C (<70)
// Count how many students in each grade.

// 18. Use sort + map →
// Top 3 students → return only names.
let top3 = data.students
  .sort((a, b) => {
    return b.score - a.score;
  })
  .slice(0, 3)
  .map((stud) => {
    stud.name;
  });
console.log(top3);

// 19. Use reduce →
// Group students by city.
// Example:
// { Delhi: [...], Mumbai: [...] }

// 20. Use filter + map + reduce →
// Average score of students
// who paid more than 20000 fees.

// ==============================
// END OF ASSIGNMENT
// ==============================
