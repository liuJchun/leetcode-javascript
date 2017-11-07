package liujianchun;

import java.net.MalformedURLException;
import java.net.URL;

public class TestURL {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			//创建一个URL的实例
		try {
			URL imooc=new URL("http://www.imooc.com");
			//根据已经有了的URL创建新的URL
			//?后面表示参数  #表示锚点
			URL url=new URL(imooc, "/index.html?username=tom#test");
			System.out.println("协议："+url.getProtocol());
			System.out.println("端口"+url.getPort());
			//若未指定端口号，则使用默认的端口号，此时的getPort()方法的返回值为-1
			System.out.println("主机："+url.getHost());
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
