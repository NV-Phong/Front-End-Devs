package frontend.devs.server.Controller;

import frontend.devs.server.DTO.JwtResponse;
import frontend.devs.server.DTO.Login;
import frontend.devs.server.DTO.Register;
import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.UserRepository;
import frontend.devs.server.Security.JwtTokenProvider;
import frontend.devs.server.Service.UserService;
import frontend.devs.server.Util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
	private UserRepository        _UserRepository;
	@Autowired
	private AuthenticationManager _AuthenticationManager;

	@Autowired
	private BCryptPasswordEncoder _BCryptPasswordEncoder;

	@Autowired
	private JwtTokenProvider _JwtTokenProvider;

	@Autowired
	private JwtUtils _JwtUtils;

	@GetMapping("GetAllUser")
	public List<User> GetAllUser()
		{
			return _UserRepository.findAll();
		}

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

	@PostMapping("/Login")
	public ResponseEntity<?> Login(@RequestBody User credentials)
		{
			User user = _UserService.FindUserByUserName(credentials.getUserName());

			if (user != null && _BCryptPasswordEncoder.matches(credentials.getPassword(), user.getPassword()))
				{
					String      token    = _JwtTokenProvider.generateToken(user.getUserName());
					JwtResponse response = new JwtResponse(token);
					return ResponseEntity.ok(response);
				}
			else
				{
					return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
				}
		}

}
