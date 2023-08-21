
const import_main = require("./teste")

let package_data_articles = []    

async function articles()
{
    let url = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=vQj5qGUSWWIUkpd9VAR0RcC7pF60hiTT'
    let a = await import_main.get_api(url,"articles")
    for(let i=0;i<a.data.response.docs.length;i++)
    {
        import_main.package_data.push([a.data.response.docs[i]])
    }
}

async function treat_articles_send_db()
{ 
    const query_articles = `INSERT INTO articles(headline,title,abstract,lead_paragraph,pub_date,web_url,keyword,document_type,
    news_segment,news_section,author,type_of_material) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`
        
    while(1)
    {
        if(package_data.length>0)
        {
            let pop_pack = package_data.pop()
            
            let response_pop_pack = [pop_pack[0].headline.print_headline,pop_pack[0].headline.main,pop_pack[0].abstract,
            pop_pack[0].lead_paragraph,pop_pack[0].pub_date,pop_pack[0].web_url,"teste_key",pop_pack[0].document_type,pop_pack[0].news_desk,
            pop_pack[0].section_name,pop_pack[0].byline.original,pop_pack[0].type_of_material]

            import_main.insert_table(response_pop_pack,query_articles)
        }
        
        await import_main.timeout(10)
    }
}


async function main_articles()
{
    treat_articles_send_db()
    articles()
}
main_articles()
