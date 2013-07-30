class FeedsController < ApplicationController
  def index
    @feeds = Feed.all
    @feeds.each do |feed|
      t = Time.now
      last_update = feed.updated_at
      if t - last_update > 120
        feed.reload
        feed.updated_at = Time.now
        feed.save
      end
    end

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
