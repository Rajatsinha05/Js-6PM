class Account {
    constructor(name, accNumber) {
        this.name = name
        this.accNumber = accNumber
        this.balance = 0
    }

    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log("your current balance is ", this.balance);
        }
        else {
            console.log("please deposit money");
        }
    }

    checkBalance() {
        return this.balance
    }
}


class SalaryAccount extends Account {
    constructor(name, accNumber) {
        super(name, accNumber)
        this.creditCard = 50000
    }
    creditCardDeposit(amount) {

        let usedAmount = 50000 - this.creditCard
        if (usedAmount > 0 && usedAmount <= amount) {
            this.creditCard += amount

            console.log("cuurent limit ", this.creditCard);
        }
        else {
            console.log("error");
        }
    }
    creditCardWithdraw(amount) {

        if (this.creditCard >= amount) {
            this.creditCard -= amount
            return amount
        }
    }

    checkCreditCardBalance() {
        return this.creditCard
    }
}

let acc = new Account("yug", 546547687)
let salary = new SalaryAccount("dhruv", 5686787)

salary.deposit(5000)
salary.creditCardDeposit(100000)
console.log(salary.checkCreditCardBalance());