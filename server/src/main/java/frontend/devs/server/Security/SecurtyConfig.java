package frontend.devs.server.Config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurtyConfig
{

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder()
		{
			return new BCryptPasswordEncoder();
		}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			  throws Exception
		{
			return authenticationConfiguration.getAuthenticationManager();
		}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
		{
			return http.csrf(csrf -> csrf.disable()).authorizeHttpRequests(
					  auth -> auth.requestMatchers("/Auth/**").permitAll().anyRequest().authenticated()).build();
		}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
				  .authorizeRequests()
				  .anyRequest().authenticated()
				  .and()
				  .authenticationManager(authenticationManager(http.getSharedObject(AuthenticationConfiguration.class)));

		return http.build();
	}
}
