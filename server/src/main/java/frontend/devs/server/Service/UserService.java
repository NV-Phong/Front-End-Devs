package frontend.devs.server.Service;

import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
	private final UserRepository _UserRepository;

	public UserService(UserRepository _UserRepository)
		{
			this._UserRepository = _UserRepository;
		}

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
