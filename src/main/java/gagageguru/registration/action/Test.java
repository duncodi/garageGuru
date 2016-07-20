package gagageguru.registration.action;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

public class Test {

	public static void main(String[] args) throws ParseException, UnsupportedEncodingException {
		// TODO Auto-generated method stub
		Date date = new Date();
		
		System.out.println(date);
		
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(cal.getTime());
		// Output "Wed Sep 26 14:23:28 EST 2012"

		String formatted = format1.format(cal.getTime());
		System.out.println(formatted);
		// Output "2012-09-26"

		System.out.println(format1.parse(formatted));
		// Output "Wed Sep 26 00:00:00 EST 2012"
		
		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeRegistered = timeformat.format(cal.getTime());
		System.out.println(timeRegistered);
		
		Random randomGenerator = new Random();
		int randomInt = randomGenerator.nextInt(10000);
		System.out.println(randomInt);
		
		System.out.println(md5("admin"));
		
	    
	    
	}
	
	private static String md5(String s) {
	    try {
	        MessageDigest m = MessageDigest.getInstance("SHA-512");
	        m.update(s.getBytes(), 0, s.length());
	        BigInteger i = new BigInteger(1,m.digest());
	        return String.format("%1$032x", i);         
	    } catch (NoSuchAlgorithmException e) {
	        e.printStackTrace();
	    }
	    return null;
	}

}
