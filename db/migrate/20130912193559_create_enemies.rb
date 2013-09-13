class CreateEnemies < ActiveRecord::Migration
  def change
    create_table :enemies do |t|
      t.string :race
      t.string :enshipname
      t.integer :hullpoints
      t.integer :shieldpoints

      t.timestamps
    end
  end
end
