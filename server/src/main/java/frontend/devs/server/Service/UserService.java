package frontend.devs.server.Service;


import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserService
{
	@Autowired
	private UserRepository _UserRepository;

	public User SaveUser(User user)
		{
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			_UserRepository.save(user);
			return user;
		}
}
