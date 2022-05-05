class Patient {
    constructor(s, n, sn, sex, dob, stv) {
        this.S = s;
        this.N = n;
        this.SN = sn;
        this.Sex = sex;
        this.DoB = new Date(dob);
        this.StV = stv;
    }
    setbyid() {
        document.getElementById("S").textContent = this.S
        document.getElementById("N").textContent = this.N
        document.getElementById("SN").textContent = this.SN
        document.getElementById("Sex").textContent = this.Sex
        document.getElementById("DoB").textContent = this.DoB.getFullYear()
        document.getElementById("StV").textContent = this.StV
    }
}
let Ivanov = new Patient('Ivanov', 'Ivan', 'Ivanovitch', 'M', new Date(1980, 6, 12), "Approved")
let Fedorov = new Patient('Fedorov', 'Andrey', 'Victorovitch', 'M', new Date(2002, 6, 24), "Denied")
let Balabobikova = new Patient('Balabobikova', 'Balaboba', 'Balabobikovna', 'F', new Date(1882, 3, 19), "Approved")
Ivanov.setbyid();
Fedorov.setbyid();
// Balabobikova.setbyid();