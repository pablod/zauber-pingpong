class SessionsController < ApplicationController
  def index
    r = nil

    response = RestClient.post 'https://crono.zauberlabs.com/crono-web-0.14/bin/login/check', 
    :j_username => '', :j_password => '', :submit => 'Login' do |response, request, result, &block|
      if(response.code == 302 and not response.headers[:location].include? 'bin/login')
        cookies = response.headers[:set_cookie][0].split ";"
        j_session = cookies[0];
        render :json => get_users(j_session)
      else
        throw new Error("Login failed!");
      end  
    end
  end


  private 

  def get_users j_session_cookie
    response = RestClient.get("https://crono.zauberlabs.com/crono-web-0.14/api/zauber/people/", :Cookie => j_session_cookie)
    response.body
  end  

end
