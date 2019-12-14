class CreateBurgers < ActiveRecord::Migration[6.0]
  def change
    create_table :burgers do |t|
      t.json :layers

      t.timestamps
    end
  end
end
