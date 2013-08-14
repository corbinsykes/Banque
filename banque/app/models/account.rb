class Account < ActiveRecord::Base
  attr_accessible :name, :balance
  belongs_to :banque

  def self.total_balance
    self.all.map { |account| account.balance }.sum
  end
end