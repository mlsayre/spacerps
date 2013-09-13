module PagesHelper
	def current_enemy=(enemy)
    @current_enemy= enemy
  end

  def opponent
  	opponent = 1
  end

  def current_enemy
    @current_enemy = Enemy.find(opponent)
  end
end

