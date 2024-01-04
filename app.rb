# app.rb
require 'sinatra'

post '/submit_quote' do
    name = params[:name]
    email = params[:email]
    quote_request = params[:quote_request]

    # Process the form data (e.g., send an email, save to a database)

    # Redirect to the thank you page
    redirect '/thank-you'
end
