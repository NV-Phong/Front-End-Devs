package frontend.devs.server.Security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtTokenProvider {

	private final SecretKey jwtSecret;

	@Value("${jwt.expiration}")
	private int jwtExpirationInMs;

	public JwtTokenProvider(@Value("${jwt.secret}") String secret) {
		this.jwtSecret = Keys.hmacShaKeyFor(secret.getBytes());
	}

	public String generateToken(String username) {
		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

		return Jwts.builder()
				  .setSubject(username)
				  .setIssuedAt(new Date())
				  .setExpiration(expiryDate)
				  .signWith(jwtSecret, SignatureAlgorithm.HS512)
				  .compact();
	}

	public String getUsernameFromToken(String token) {
		Claims claims = Jwts.parserBuilder()
				  .setSigningKey(jwtSecret)
				  .build()
				  .parseClaimsJws(token)
				  .getBody();

		return claims.getSubject();
	}

	public boolean validateToken(String authToken) {
		try {
			Jwts.parserBuilder().setSigningKey(jwtSecret).build().parseClaimsJws(authToken);
			return true;
		} catch (SignatureException ex) {
			// log error
		} catch (MalformedJwtException ex) {
			// log error
		} catch (ExpiredJwtException ex) {
			// log error
		} catch (UnsupportedJwtException ex) {
			// log error
		} catch (IllegalArgumentException ex) {
			// log error
		}
		return false;
	}
}
