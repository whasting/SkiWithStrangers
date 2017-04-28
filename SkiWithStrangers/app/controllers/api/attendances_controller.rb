class Api::AttendancesController < ApplicationController
  def index
    @attendances = Attendance.filter(params).includes(:user)
  end

  def create
    @attendance = Attendance.new(attendance_params)
    if @attendance.save
      render 'api/attendances/show'
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def show
    @attendance = Attendance.find(params[:id])
    if @attendance
      render 'api/attendances/show'
    else
      render json: ['Attendance not found'], status: 404
    end
  end

  def update
    @attendance = Attendance.find(params[:id])
    if @attendance && @attendance.update_attributes(attendance_params)
      render 'api/attendances/show'
    elsif @attendance
      render json: @attendance.errors.full_messages, status: 422
    else
      render json: ['Attendance not found'], status: 404
    end
  end

  def destroy
    @attendance = Attendance.where(
      "user_id = ? and event_id = ?",
      params[:user_id],
      params[:event_id]
    ).first
    p @attendance
    if @attendance && @attendance.destroy
      render 'api/attendances/show'
    elsif @attendance
      render json: @attendance.errors.full_messages, status: 422
    else
      render json: ['Attendance not found'], status: 404
    end
  end

  private

  def attendance_params
    params.require(:attendance).permit(:user_id, :event_id, :waitlist)
  end
end
