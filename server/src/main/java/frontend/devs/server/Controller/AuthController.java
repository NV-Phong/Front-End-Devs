package frontend.devs.server.Controller;

import com.mysql.cj.x.protobuf.Mysqlx;
import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.UserRepository;
import frontend.devs.server.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4321")
@RestController
@RequestMapping("/Auth")
public class AuthController
{
	@Autowired
	private UserService _UserService;

	@Autowired
	private UserRepository _UserRepository;

	@PostMapping("Register")
	public ResponseEntity<User> Register(@RequestBody User user)
		{
			User savedUser = _UserService.SaveUser(user);
			if (savedUser != null)
				{
					return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
				}
			else
				{
					return ResponseEntity.badRequest().build();
				}
		}

	@GetMapping("GetAllUser")
	public List<User> GetAllUser()
		{
			return _UserRepository.findAll();
		}
}
