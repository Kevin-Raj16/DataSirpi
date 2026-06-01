/**
 * Bank Account Example
 * Demonstrates Class, Object,
 * Constructor and Methods.
 */
public class BankAccount {

    private String accountHolder;
    private int accountNumber;
    private double balance;

    /**
     * Constructor
     */
    public BankAccount(
            String accountHolder,
            int accountNumber,
            double balance) {

        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    /**
     * Deposit amount
     */
    public void deposit(double amount) {
        balance += amount;
    }

    /**
     * Withdraw amount
     */
    public void withdraw(double amount) {

        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    /**
     * Display account details
     */
    public void displayAccount() {

        System.out.println("Account Holder : "
                + accountHolder);

        System.out.println("Account Number : "
                + accountNumber);

        System.out.println("Balance : "
                + balance);
    }

    public static void main(String[] args) {

        BankAccount account =
                new BankAccount(
                        "Kevin Raj",
                        123456,
                        5000);

        account.deposit(2000);

        account.withdraw(1000);

        account.displayAccount();
    }
}
