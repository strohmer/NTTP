import java.util.ArrayList;

public static void webCrawler() {
		Set<String> visited = new HashSet<String>();
		visited.add("http://www.visited.com/");
		//A set already contains unique elements and thus will not have duplicates
		
		//The URL can be trimmed. http:// and www, for example, would be common between all if not most entries.
		//These can be replaced with some kind of code or removed completely:
		String target = "http://"; String replacement = "h>";
		String target2 = "www."; String replacement2 = "w>";
		String url = "http://www.google.com/";
		String shortened = url.replace(target, replacement);
		String evenmoreshortened = shortened.replace(target2, replacement2);
		//Same with .com
		
		//query strings can be removed
		String evenmoremoreshortened = evenmoreshortened.substring(evenmoreshortened.indexOf('?'),evenmoreshortened.length()-1);
		
		//Data structure:
		//A trie is a more suitable data structure that will consume less memory. 
		//We'll need an add and search:
		
		public class Node {
			char c;
			int co;
			boolean end;
			ArrayList<Node> children = new ArrayList<Node>();
				
			public Node(char val) {
				c = val;
				co = 0;
				end = false;
				children = new ArrayList<Node>();
			}
			public Node childNode(char val) {
				if (children != null) {
					for (Node each : children) {
						if (each.c == val) {
							return each;
						}
					}
				}
				return null;
			}
		}
		
		public class Trie {
			Node root;
			public Trie() {
				root = new Node(' '); //Empty root node
			}
			public void add (String s) {
				if (find(s)) return;
				Node node = root;
				for (char c: s.toCharArray()) {
					Node child = node.childNode(c);
					if (child != null) {
						node = child;
					} else {
						node.children.add(new Node(c));
					}
					node.co++;
				}
				node.end = true;
			}
			
			public boolean find(String s) {
				Node node = root;
				for (char c : s.toCharArray()) {
					if (node.childNode(c) == null) {
						return false;
					} else {
						node = node.childNode(c);
					}
					if (node.end == true) {
						return true;
					}
				}
				return false;
			}
		}
	}