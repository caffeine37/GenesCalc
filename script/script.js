function calculoGenes() {

    par1 = document.getElementById('gene1').value.split('')
    par2 = document.getElementById('gene2').value.split('')

    result = par1[0] + par2[0] + ", "
    result += par1[0] + par2[1] + ", "
    result += par1[1] + par2[1] + ", "
    result += par1[1] + par2[0]

    return result

}
function clear() {

    document.getElementById('result').innerHTML = ""

}

function showResult() {

    result = calculoGenes()

        clear()
        document.getElementById('result').innerHTML = result
        
    }

