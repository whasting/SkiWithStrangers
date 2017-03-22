class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
    if @event
      render 'api/events/show'
    else
      render json: ['Event does not exist'], status: 404
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event && @event.update_attributes(event_params)
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event
      @event.destroy
      render 'api/events/show'
    else
      render json: ['Event does not exist'], status: 404
    end
  end

  private

  def event_params
    params.require(:event).permite(:title, :body, :date, :capacity, :resort_id, :host_id)
  end
end
