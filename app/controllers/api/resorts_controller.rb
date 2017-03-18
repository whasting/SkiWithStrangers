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

  def show
    @resort = Resort.find(params[:id])
    if @resort
      render 'api/resorts/show'
    else
      render json: ['Resort not found'], status: 404
    end
  end

  def update
    @resort = Resort.find(params[:id])
    if @resort && @resort.update_attributes(resort_params)
      render 'api/resorts/show'
    else
      render json: @resort.errors.full_messages, status: 422
    end
  end

  def destroy
    @resort = Resort.find(params[:id])
    if @resort && @resort.destroy
      @resort.destroy
      render 'api/resorts/show'
    else
      render json: ['Resort not found'], status: 404
    end
  end

  private

  def resort_params
    params.require(:resorts).permit(:name, :description, :address, :resort_logo_url)
  end
end
