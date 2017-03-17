class Api::ResortsController < ApplicationController
  def index
    @resorts = Resort.all
    render 'api/resorts/index'
  end

  def create
    @resort = Resort.new(resort_params)
    if @resort.save
      render 'api/resorts/show'
    else
      render json: @resort.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy
  end

  private

  def resort_params
    params.require(:resorts).permit(:name, :description, :address, :resort_logo_url)
  end
end
