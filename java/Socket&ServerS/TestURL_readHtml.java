package liujianchun;

/**
 * URL获取www.baidu.com的HTML信息
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

public class TestURL_readHtml {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			URL url=new URL("https://www.baidu.com");
			//通过URL的openStream()方法获取URL表示资源的字节输入流
			InputStream is=url.openStream();
			//将字节输入流转化为字符输入流
			InputStreamReader isr=new InputStreamReader(is,"utf-8");
			//为字符输入流添加缓冲，提高字符输入效率
			BufferedReader br=new BufferedReader(isr);
			String data=br.readLine();//读取数据
			while(data!=null) {//循环读取数据
				System.out.println(data);//输出读取的数据
				data=br.readLine();//读取下一行
				System.out.println();
			}
			//关闭相关流
			is.close();
			isr.close();
			br.close();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
