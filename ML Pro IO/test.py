def ArrayChallenge(strParam):

  # code goes here
  words = strParam.split()

  for i in range(len(words)):
    for j in range(len(words)):
      if words[i] == words[j]:
        continue
      elif sorted(words[i]) == sorted(words[j]):
        print("anagram")
      elif sorted(words[i]) != sorted(words[j]):
        print("aren't anagram")
  return strParam

# keep this function call here 
print(ArrayChallenge("aa aa odg dog gdo"))