package com.mercadolibre.dojos;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.equalTo;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

/**
 * Tests for the dojo.
 */
public class DojoTest {
	
	private SpreadSheet sheet;
	
	@Before
	public void setup() {
		this.sheet = new SpreadSheet();
	}
	
	@Test
	@Ignore
	public void testSpreadSheet_withNumericValues_shouldPopulateTwoCells() {
		
		// ... 
        // Code here!
        // ... 
		
		Object a1 = this.sheet.get("a1");
		Object a2 = this.sheet.get("a2");
		
		assertThat(a1, is(notNullValue()));
		assertThat((Integer) a1, is( equalTo(1) ));
		
		assertThat(a2, is(notNullValue()));
		assertThat((Integer) a2, is( equalTo(2) ));
	}
	
	@Test
	@Ignore
	public void testSpreadSheet_withALabelAndANumericValue_shouldPopulateTwoCells() {
		
		// ... 
        // Code here!
        // ... 
		
		Object a1 = this.sheet.get("a1");
		Object a2 = this.sheet.get("a2");
		
		assertThat(a1, is(notNullValue()));
		assertThat((Integer) a1, is( equalTo(1) ));
		
		assertThat(a2, is(notNullValue()));
		assertThat((String) a2, is( equalTo("Valor:") ));
	}
	
	@Test
	@Ignore
	public void testSpreadSheet_withAReferenceToAnotherCell_shouldReturnTheValueOfTheReferencedCell() {
		
		// ... 
        // Code here!
        // ... 
		
		Object a1 = this.sheet.get("a1");
		Object a2 = this.sheet.get("a2");
		
		assertThat(a1, is(notNullValue()));
		assertThat((Integer) a1, is( equalTo(1) ));
		
		assertThat(a2, is(notNullValue()));
		assertThat((Integer) a2, is( equalTo(1) ));
	}
	
	@Test
	@Ignore
	public void testSpreadSheet_withASummaryFunction_shouldReturnTheResultOfTheSummary() {
		
		// ... 
        // Code here!
        // ... 

		this.sheet.set("a1", 1);
		this.sheet.set("a2", 2);
		
		Object a3 = this.sheet.get("a3");
		
		assertThat(a3, is(notNullValue()));
		assertThat((Integer) a3, is( equalTo(3) ));
		
		this.sheet.set("a2", 9);
		
		a3 = this.sheet.get("a3");
		
		assertThat(a3, is(notNullValue()));
		assertThat((Integer) a3, is( equalTo(10) ));
	}
	
	@Test
	@Ignore
	public void testSpreadSheet_withASummaryFunctionAndABrokenRange_shouldReturnTheResultOfTheSummary() {
		
		// ... 
        // Code here!
        // ... 
		
		this.sheet.set("a1", 1);
		this.sheet.set("a2", 2);
		
		Object a3 = this.sheet.get("a3");
		
		assertThat(a3, is(notNullValue()));
		assertThat((Integer) a3, is( equalTo(3) ));
		
		this.sheet.set("a2", 9);
		
		assertThat(a3, is(notNullValue()));
		assertThat((Integer) a3, is( equalTo(10) ));
	}
	
}
