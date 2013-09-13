class PagesController < ApplicationController

 def index
    @enemies = Enemy.all
  end

  def welcome
  end

  def help
  end

  def play
  end

  def hiscores
  end

 def show
    @user = User.find(params[:id])
  end

 def set_enemy
      @enemy = Enemy.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def enemy_params
      params.require(:enemy).permit(:id, :hullpoints, :shieldpoints, :race, :enshipname)
    end

end
