class AddPhones < ActiveRecord::Migration

  def change
    create_table :phones do |t|
      t.string     :label
      t.string     :digits
      t.references :contact
      t.timestamps 
    end
  end

end