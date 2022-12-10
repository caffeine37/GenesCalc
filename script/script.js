function generateGenes() {

    if (document.getElementById('gene1').value == 'Aa' || document.getElementById('gene2').value == 'Aa') {
        result = 'Invalid'
    } else {

        let gene1 = document.getElementById('gene1').value.split('')
        let gene2 = document.getElementById('gene2').value.split('')

        let result = (gene1[0] + '' + gene2[1])

        return result
    }
}

function clear() {

    document.getElementById('result').innerHTML = ""

}

function checkGenes(result) {

    if (result == 'AA' || result == 'Aa' || result == 'aa') {
        return true
    } else {
        return false
    }

}

function showResult() {

    result = generateGenes()
    if (checkGenes(result) == true) {
        clear()
        document.getElementById('result').innerHTML = result
    } else {
        clear()
        document.getElementById('result').innerHTML = 'Valor inserido inválido!'
    }

}

function teste() {
    alo = document.getElementById('gene1').value
    document.getElementById('result').innerHTML = alo
}

