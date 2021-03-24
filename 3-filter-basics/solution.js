const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

function printFilteredGrades(grades) {
  const lowerGrades = grades.filter((grade) => grade >= 3);
  const higherGrades = grades.filter((grade) => grade < 3);

  console.table(lowerGrades);
  console.table(higherGrades);
}

printFilteredGrades(grades);

export default printFilteredGrades;
