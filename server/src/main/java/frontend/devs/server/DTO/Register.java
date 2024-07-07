package frontend.devs.server.DTO;

import lombok.Data;

@Data
public class Register
{
	private String UserName;
	private String Password;
	private String Email;
}
