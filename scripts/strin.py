def process_string(input_string):
    input_list = input_string.split(',')
    output_list = [x.strip().capitalize() for x in input_list]
    return output_list


input_string = "Take long walks along the Parvati River bank and chill at cafes in Kasol,Enjoy a healing hot-water bath in Manikaran and shop for souvenirs,Explore Tosh village and get a birds-eye view of Parvati Valley,Trek your way in the snow to Kutla amidst beautiful waterfalls,Bask in the solitude and silence of the peaceful Buddhaban"
output_list = process_string(input_string)
print(output_list)
