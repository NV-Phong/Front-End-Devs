package frontend.devs.server.Config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurtyConfig
{
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
		{
			return http
					  .csrf(csrf-> csrf.disable())
					  .authorizeHttpRequests(auth -> auth
					  .requestMatchers("/CRUD/**",
								 "/Auth/**")
					  .permitAll().anyRequest().authenticated()
						)
					  .build();
		}

}
