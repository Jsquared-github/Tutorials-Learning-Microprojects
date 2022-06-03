package springdemo.springtutorial.sample_enterprise_flow.BusinessService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import springdemo.springtutorial.sample_enterprise_flow.DataService.DataService;
import java.util.List;

@Component
public class BusinessService {
    @Autowired
    private DataService dataService;

    public long calculateSum() {
        List<Integer> data = dataService.retrieveData();
        return data.stream().reduce(Integer::sum).get();

    }
}
