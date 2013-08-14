class AccountsController < ApplicationController
  def add
    @accounts = Account.all
  end

  def add_account
    @account = Account.new(name: params[:accountNameKey], balance: params[:accountBalanceKey])
    @account.save
  end

  def withdraw
    @accounts = Account.all
  end

  #Calculation for funds withdraw
  def withdraw_funds
    @account = Account.find(params[:withdrawAccountKey])
    @account.balance = @account.balance - params[:withdrawAmountKey].to_f
    @account.save
  end

  def deposit
    @accounts = Account.all
  end

  def deposit_funds
    @account = Account.find(params[:depositAccountKey])
    @account.balance = @account.balance + params[:depositAmountKey].to_f
    @account.save
  end
end