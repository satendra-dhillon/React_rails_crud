class Api::V1::PostsController < ApplicationController
  
  def index
    render json: Post.all
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  def destroy
    # byebug
    Post.destroy(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:id, :title, :description)
  end

end
