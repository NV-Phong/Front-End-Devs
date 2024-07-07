package frontend.devs.server.Service;

import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;

@Service
public class UserService
{
	@Autowired
	private UserRepository _UserRepository;

	public User FindUserByUserName(String UserName)
		{
			return _UserRepository.findByUserName(UserName);
		}

	public User SaveUser(User user)
		{
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			_UserRepository.save(user);
			return user;
		}

}
