const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newObject);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((student) => {
    return student.name === name;
  });
  return array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jill"));

// const findLowestScore = (array) => {
//   let lowestScore = 0;
//   array.forEach((score) => {
//     lowestScore += score;
//   });
//   return lowestScore;
// };
// console.log(findLowestScore(submissions));
