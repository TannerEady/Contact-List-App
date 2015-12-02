class Phone < ActiveRecord::Base

  belongs_to :contact

  validates :label, presence: true
  validates :digits, presence: true

end