/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung 
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan 
    Golongan `brutoSalary` nya masing - masing.
    pengertian : 
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus 
    salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `Tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `Tax` 

    Golongan II
    diwajibkan membayar : 
    - `Tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan III
    diwajibkan membayar :
    - `Tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `Tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya 
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input : 
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :  
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"


    **WAJIB MENGGUNAKAN PSEUDOCODE** 

    [YOUR PSEUDOCODE HERE]
    CREAT FUNCTION Golongan1 with parameter brutoSalary AND months
        STORE pajakGajiKotor with value brutoSalary multiply 4%
        STORE potonganBPJS with value brutoSalary subtraction pajakGajiKotor THEN multiply 5%
        STORE totalBPJS with value potonanganBPJS multiply months
        RETURN object with FIRST key potongan value pajakGajiKotor plus potonganBPJS, SECOND key totalBPJS value totalBPJS
    END FUNCTION

    CREAT FUNCTION Golongan2 with parameter brutoSalary AND months
        STORE pajakGajiKotor with value brutoSalary multiply 3%
        STORE potonganBPJS with value brutoSalary subtraction pajakGajiKotor THEN multiply 4%
        STORE totalBPJS with value potonanganBPJS multiply months
        RETURN object with FIRST key potongan value pajakGajiKotor plus potonganBPJS,SECOND key totalBPJS value totalBPJS
    END FUNCTION

    CREAT FUNCTION Golongan3 with parameter brutoSalary AND months
        STORE pajakGajiKotor with value brutoSalary multiply 2%
        STORE potonganBPJS with value brutoSalary subtraction pajakGajiKotor THEN multiply 3%
        STORE totalBPJS with value potonanganBPJS multiply months
        RETURN object with FIRST key potongan value pajakGajiKotor plus potonganBPJS, SECOND key totalBPJS value totalBPJS
    END FUNCTION

    CREAT FUNCTION Golongan4 with parameter brutoSalary AND months
        STORE potonganBPJS with value brutoSalary multiply 4%
        STORE totalBPJS with value potonanganBPJS multiply months
        RETURN object with FIRST key potongan value potonganBPJS, SECOND key totalBPJS value totalBPJS
    END FUNCTION

    CREAT FUNCTION SalaryNett with parameter brutoSalary AND months
        STORE Object with name objResult with FIRST key nettSalary with value brutoSalary, SECOND key totalBPJS with value zero
        IF brutoSalary GREATER THAN EQUAL 9000000 THEN
            objResult with KEY nettSalary SUBSTRACTION EQUAL FUNCTION golongan1 with parameter brutoSalary AND months with KEY potongan
            objResult with KEY totalBPJS EQUAL FUNCTION golongan1 with parameter brutoSalary AND months with KEY totalBPJS
        ELSE IF brutoSalary GREATER THAN EQUAL 6000000 AND brutoSalary LESS THAN 9000000 THEN
            objResult with KEY nettSalary SUBSTRACTION EQUAL FUNCTION golongan2 with parameter brutoSalary AND months with KEY potongan
            objResult with KEY totalBPJS EQUAL FUNCTION golongan2 with parameter brutoSalary AND months with KEY totalBPJS
        ELSE IF brutoSalary GREATER THAN EQUAL 3000000 AND brutoSalary LESS THAN 6000000 THEN
            objResult with KEY nettSalary SUBSTRACTION EQUAL FUNCTION golongan3 with parameter brutoSalary AND months with KEY potongan
            objResult with KEY totalBPJS EQUAL FUNCTION golongan3 with parameter brutoSalary AND months with KEY totalBPJS
        ELSE IF brutoSalary GREATER THAN EQUAL 1000000 AND brutoSalary LESS THAN 3000000 THEN
            objResult with KEY nettSalary SUBSTRACTION EQUAL FUNCTION golongan3 with parameter brutoSalary AND months with KEY potongan
            objResult with KEY totalBPJS EQUAL FUNCTION golongan3 with parameter brutoSalary AND months with KEY totalBPJS
        END IF
        RETURN variable objResult
    END FUNCTION

    CREAT FUNCTION salaryRangeCalculator with parameter brutoSalary AND months
        STORE salary with CALL FUNCTION salaryNett with parameter brutoSalary AND months
        DISPLAY with string 'netSalary = value from object salary with key nettSalary, totalBPJS yang telah dibayarkan = value from object salary with key totalBPJS'
    END FUNCTION

    CALL FUNCTION salaryRangeCalculator with argument brutoSalary EQUAL 5000000 AND argument months EQUAL 3


*/
function golongan1(brutoSalary,months){
    let pajakGajiKotor  = (brutoSalary*0.04) 
    let potonganBPJS    = (brutoSalary - pajakGajiKotor)*0.05
    let totalBPJS       = potonganBPJS*months
    return {'potongan' : pajakGajiKotor+potonganBPJS,'totalBPJS': totalBPJS}
}
function golongan2(brutoSalary, months){
    let pajakGajiKotor = (brutoSalary*0.03) 
    let potonganBPJS   = (brutoSalary - pajakGajiKotor)*0.04
    let totalBPJS      = potonganBPJS*months
    return {'potongan' : pajakGajiKotor+potonganBPJS,'totalBPJS': totalBPJS}
}
function golongan3(brutoSalary,months){
    let pajakGajiKotor = (brutoSalary*0.02) 
    let potonganBPJS   = (brutoSalary - pajakGajiKotor)*0.03
    let totalBPJS      = potonganBPJS*months
    return {'potongan' : pajakGajiKotor+potonganBPJS,'totalBPJS': totalBPJS}
}

function golongan4(brutoSalary){
    let potonganBPJS = brutoSalary *0.04
    let totalBPJS    = potonganBPJS*months
    return {'potongan' : potonganBPJS,'totalBPJS': totalBPJS}
}

function salaryNett(brutoSalary,months){

    let objResult = {nettSalary: brutoSalary, totalBPJS: 0}
    if(brutoSalary >= 9000000 ){
        objResult.nettSalary -= golongan1(brutoSalary,months).potongan
        objResult.totalBPJS = golongan1(brutoSalary,months).totalBPJS
    }else if(brutoSalary >= 6000000 && brutoSalary<9000000){
        objResult.nettSalary -= golongan2(brutoSalary,months).potongan
        objResult.totalBPJS = golongan2(brutoSalary,months).totalBPJS
    } else if(brutoSalary>=3000000 && brutoSalary<6000000){
        objResult.nettSalary -= golongan3(brutoSalary,months).potongan
        objResult.totalBPJS = golongan3(brutoSalary,months).totalBPJS
    } else if(brutoSalary>=1000000 && brutoSalary<3000000){
        objResult.nettSalary -= golongan4(brutoSalary,months).potongan
        objResult.totalBPJS = golongan4(brutoSalary,months).totalBPJS
    }
    return objResult
}

function salaryRangeCalculator(brutoSalary,months) {
    // your code here 
    let salary = salaryNett(brutoSalary,months)
    console.log(`netSalary = ${salary.nettSalary}, totalBPJS yang telah dibayarkan = ${salary.totalBPJS}`)
}

salaryRangeCalculator(5000000,3)
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000


