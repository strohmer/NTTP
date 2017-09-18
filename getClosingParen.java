public static int getClosingParen(String sentence, int openingParenIndex) {
  int a = 1;
  for (int i = openingParenIndex + 1; i < sentence.length(); i++) {
    char c = sentence.charAt(i);
    if (c == '(') {
      a++;
    } else if (c == ')') {
      a--;
      if (a == 0) {
        return i;
      }
    }
  }
  return -1;
}
