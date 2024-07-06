package frontend.devs.server.Controller;

import frontend.devs.server.Entities.CRUD;
import frontend.devs.server.Entities.User;
import frontend.devs.server.Repositories.CRUDRepository;
import frontend.devs.server.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/CRUD")
public class CRUDController
{
	@Autowired
	private CRUDRepository _CRUDRepository;
	@Autowired
	private UserRepository _UserRepository;
	@GetMapping
	public List<CRUD> GetCRUD()
		{
			return _CRUDRepository.findAll();
		}

	@PostMapping
	public CRUD CreateCRUD(@RequestBody CRUD crud)
		{
			return _CRUDRepository.save(crud);
		}

}

