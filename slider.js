$(document).ready(function(){
    getImages();
    $('.slider-container').slick({
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }   
        ],
    });
    createLinks()
});



const images = ["AMI.png","API Gateway.png","AWS CLI and SDK.png","Aurora.png","Cloudformation.png","Cloudfront.png","Cloudtrail.png","Cloudwatch.png","Cognito.png","DNS.png","DynamoDb.png","EBS.png","EC2 AutoScaling.png","EC2 cheatsheet.png","EC2 pricing.png","EFS.png","ELB.png","Elastic Beanstalk.png","Elasticache.png","IAM.png","Kinesis.png","Lambda.png","NAT.png","RDS.png","Redshift.png","S3 CheatSheet.png","SNS.png","SQS.png","Snowball Cheatsheet.png","Storage Gateway.png","nacl.png","route53.png","security groups.png","vpc endpoint.png","vpc flowlogs.png"]


function getImages() {
    const container = document.getElementById("container");
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `pics/${img}`
        container.appendChild(imgElement)
    })
}

function createLinks() {
    const listContainer = document.getElementById("list");
    images.forEach((img, i) => {
        const listButton = document.createElement('button');
        listButton.innerHTML = img.replace('.png', '');
        listButton.addEventListener('click', function () {
            console.log(`Viewing ${img}`)
            $('.slider-container').slick(`slickGoTo`, `${i}`)
        }, false)
        listContainer.appendChild(listButton)
    })
}