class Banque < ActiveRecord::Base
  has_many :accounts
end