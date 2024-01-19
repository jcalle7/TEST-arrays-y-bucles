function verifyExamination(nota) {
    return nota >= 70;
}

function evaluateExams(notas) {
    let resultados = [];

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        let passesQuimester = verifyExamination(nota);

        resultados.push({
            exam: i + 1,
            nota: nota,
            approved: passesQuimester ? 'Approved' : 'Failed'
        });
    }

    return resultados;
}

function testArray() {
    let notas = [75, 96, 80, 85, 90];
    let evaluationResults = evaluateExams(notas);

    alert("test results:");

    for (let i = 0; i < evaluationResults.length; i++) {
        let result = evaluationResults[i];

        if (result.approved === 'Approved') {
            alert(`Exam ${result.exam}: Passed`);
        } else {
            alert(`Exam ${result.exam}: Failed`);
        }
    }
}

testArray();