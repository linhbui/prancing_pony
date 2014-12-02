class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  after_initialize :ensure_session_token
  
  has_many(
    :items, 
    class_name: "Item", 
    foreign_key: "seller_id",
    inverse_of: :seller
  ) 

  has_many(
      :reviews,
      class_name: "Review",
      foreign_key: "author_id",
      inverse_of: :author
  )

  has_many :carts

  attr_reader :password
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?      
    user.is_password?(password) ? user : nil
  end
    
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
  
  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!    
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def cart_count
    $redis.scard "cart#{id}"
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)  
  end
end
