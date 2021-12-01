/**
 * problem:不能完整读出 html ，在html的文档中，其中包含 某些单标签，不能被识别。因而报错。
 */
package liujianchun;

import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class DOMtest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DocumentBuilderFactory dbf=DocumentBuilderFactory.newInstance();
		//创建一个DocumentBuilder对象
		try {
			DocumentBuilder db=dbf.newDocumentBuilder();
			//通过DocumentBuilder的parse的方法加载 xml 文件
			Document document=db.parse("test.xml");
			//获取所有div的节点的集合
			NodeList divlist=document.getElementsByTagName("div");
			System.out.println("div的长度："+divlist.getLength());
			//遍历每一个div的集合节点
			for(int i=0;i<divlist.getLength();i++) {
				//通过item(i)方法，获取一个div节点，nodeList的索引值从0开始
				Node div=divlist.item(i);
				//遍历div的属性
				//获取div 的标签属性的集合
				NamedNodeMap attri=div.getAttributes();
				//便利attribute的集合
				
				//获取
				System.out.println("第"+(i+1)+"个div"+attri.getLength());
				for(int j=0;j<attri.getLength();j++) {
					//获取属性
					Node attr=attri.item(j);
					//获取属性名
					System.out.println("属性名："+attr.getNodeName());
					//获取属性值
					System.out.println("----------------属性值："+attr.getNodeValue());
					
				}
			}
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
